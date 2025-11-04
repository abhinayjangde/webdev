from fastmcp import FastMCP
import os
import sqlite3

mcp = FastMCP(name="Expense Tracker")

database_url = os.path.join(os.path.dirname(__file__), 'expenses.db')
category_path = os.path.join(os.path.dirname(__file__), 'categories.json')

def init_db():
    with sqlite3.connect(database_url) as c:

        c.execute('''
            CREATE TABLE IF NOT EXISTS expenses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT NOT NULL,
                amount REAL NOT NULL,
                category TEXT NOT NULL,
                subcategory TEXT DEFAULT '',
                note TEXT DEFAULT ''
            )
        ''')

init_db()

@mcp.tool()
def add_expense(date: str, amount: float, category: str, subcategory: str = "", note: str = ""):
    """Add a new expense entry."""
    with sqlite3.connect(database_url) as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO expenses (date, amount, category, subcategory, note)
            VALUES (?, ?, ?, ?, ?)
        ''', (date, amount, category, subcategory, note))
        conn.commit()
    return {"status": "success", "id": cursor.lastrowid, "message": "Expense added successfully."}


@mcp.tool()
def list_expenses(start_date: str = None, end_date: str = None):
    """List recent expenses within an optional date range."""
    with sqlite3.connect(database_url) as conn:
        cursor = conn.cursor()
        query = '''
            SELECT id, date, amount, category, subcategory, note
            FROM expenses
        '''
        params = []
        if start_date and end_date:
            query += ' WHERE date BETWEEN ? AND ?'
            params.extend([start_date, end_date])
        elif start_date:
            query += ' WHERE date >= ?'
            params.append(start_date)
        elif end_date:
            query += ' WHERE date <= ?'
            params.append(end_date)

        query += ' ORDER BY date ASC'

        cursor.execute(query, params)
        rows = cursor.fetchall()
    
    expenses = [{"id": row[0], "date": row[1], "amount": row[2], "category": row[3], "subcategory": row[4], "note": row[5]} for row in rows]
    return expenses

@mcp.tool()
def summarize(start_date: str = None, end_date: str = None, category: str = None):
    """Summarize expenses over a specified period and optional category."""
    with sqlite3.connect(database_url) as conn:
        cursor = conn.cursor()
        query = (
            """
            SELECT category, SUM(amount) as total_amount
            FROM expenses
            WHERE date BETWEEN ? AND ?
            """
        )
        params = [start_date, end_date]
        if category:
            query += ' AND category = ?'
            params.append(category)
        
        query += ' GROUP BY category ORDER BY category ASC'

        cursor.execute(query, params)
        results = cursor.fetchall()
    return [{"category": row[0], "total_amount": row[1]} for row in results]


@mcp.resource("expense://categories", mime_type="application/json")
def categories():
    """Provide categories from a JSON file."""
    with open(category_path, 'r', encoding='utf-8') as f:
        return f.read()

# -------------------------------------------------
'''
Old version of list_expenses without date filtering
'''
# @mcp.tool()
# def list_expenses():
#     """List recent expenses."""
#     with sqlite3.connect(database_url) as conn:
#         cursor = conn.cursor()
#         cursor.execute('''
#             SELECT id, date, amount, category, subcategory, note
#             FROM expenses
#             ORDER BY date DESC
#         ''',)
#         rows = cursor.fetchall()
#     expenses = [{"id": row[0], "date": row[1], "amount": row[2], "category": row[3], "subcategory": row[4], "note": row[5]} for row in rows]
#     return expenses

if __name__ == "__main__":
    mcp.run()

