import http.server
import socketserver
import sys
import cgi

Handler = http.server.SimpleHTTPRequestHandler

port_number = int(input())

# MIME Typeに'application/wasm'を追加
Handler.extensions_map['.wasm'] = 'application/wasm'
with socketserver.TCPServer(("", port_number), Handler) as httpd:
    print("サーバ起動 port", port_number)
    httpd.serve_forever()

# , "-cgi"
