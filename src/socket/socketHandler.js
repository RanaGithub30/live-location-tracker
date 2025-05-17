module.exports = function(io) {
    io.on("connection", (socket) => {
        socket.on("location", (data) => {
            io.emit("receive-location", { id: socket.id, ...data });
        });

        socket.on("disconnect", () => {
            io.emit("user-disconnected", socket.id);
        });
    });
};