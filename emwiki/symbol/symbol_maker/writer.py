#!/usr/bin/env python
# encoding: utf-8
__author__ = 'nakasho'

import codecs


class Writer:
    def __init__(self):
        self.content = None

    def write(self, path):
        with codecs.open(path, 'w', 'utf-8-sig') as fp:
            fp.write("<!DOCTYPE html>\n"
                     "<html lang='en'>\n")
            self.write_header(fp)
            self.write_body(fp)
            fp.write("</html>\n")

    def write_header(self, fp):
        fp.write(f'''
                <head>
                    <meta charset='UTF-8'>
                    <title>{self.content.symbol}</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js"></script>
                    <script src="/static/symbol/JavaScript/searcher.js"></script>
                    <script src="/static/symbol/JavaScript/index.js"></script>
                    <script src="/static/symbol/JavaScript/sidebar.js"></script>
                    <link rel='stylesheet' href="/static/symbol/CSS/index.css" type='text/css'></link>
                </head>
                ''')

    def write_body(self, fp):
        fp.write('''
            <body data-spy="scroll" data-target="#list-of-definitions">
            <main class="container-fluid">
            <div class="row">
        ''')
        self.content.write(fp)
        fp.write('''
            </div>
            </main>
            </body>
        ''')


if __name__ == '__main__':
    pass
