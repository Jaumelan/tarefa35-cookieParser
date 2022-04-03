module.exports = {
    apps: [
        {
            scripts: "index.js",
            cwd: "backend/",
            name: "Backend",
            watch: true
        },
        {
            scripts: "main.js",
            cwd: "frontend/",
            name: "Frontend",
            watch: true
        }
    ]
}