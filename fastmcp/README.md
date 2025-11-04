
# Building Local MCP Server

### Test Command
```bash
uv run fastmcp dev main.py
```
### Run Command
```bash
uv run fastmcp run main.py
```

### Add Server to Claude Desktop
```bash
uv run fastmcp install claude-desktop main.py
```

### Resources
docs = https://gofastmcp.com/getting-started/welcome
deploy = https://fastmcp.cloud/


### Convert FastAPI app to FastMCP server
```python
from fastmcp import FastMCP
from main import app

mcp = FastMCP.from_fastapi(
    app=app,
    name="Server Name"
)

if __name__=="__main__":
    mcp.run()
```