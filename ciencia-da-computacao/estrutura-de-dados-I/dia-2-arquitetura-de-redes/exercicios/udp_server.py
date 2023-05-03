from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = ("", 8084)


class EchoHandler(DatagramRequestHandler):
    def handle(self):
        self.socket.sendto(b"Hello, World!\n", self.client_address)
        while True:
            data, client_address = self.socket.recvfrom(1024)
            self.socket.sendto(data, client_address)
            print(data.decode("ascii").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
