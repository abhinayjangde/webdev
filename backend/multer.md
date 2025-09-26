
# Upload a sinlge image file with error handling

```javascript
import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join('public', 'index.html'));
});

app.post('/upload', (req, res) => {
    upload.single('myImage')(req, res, (err) => {
        if (err) {
            // Handle multer errors (like file type not allowed)
            return res.send(`
                <h2>Upload Error!</h2>
                <p style="color: red;">${err.message}</p>
                <a href="/">Try again</a>
            `);
        }

        if (!req.file) {
            return res.send(`
                <h2>Upload Error!</h2>
                <p style="color: red;">No file was uploaded.</p>
                <a href="/">Try again</a>
            `);
        }

        console.log('File uploaded successfully:', req.file);
        res.send(`<h2>Image Uploaded Successfully!</h2><p>File saved as: ${req.file.filename}</p><a href="/">Upload another</a>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```