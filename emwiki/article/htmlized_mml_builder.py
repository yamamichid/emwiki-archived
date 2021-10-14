import glob
import os
import shutil
from collections import OrderedDict

from django.conf import settings
from lxml import html
from tqdm import tqdm


class HtmlFile:
    """HTMLファイルの読み込み・書き込みを行う
    """

    def __init__(self, path):
        self.path = path
        self.root = None

    def read(self):
        self.root = html.parse(self.path)

    def write(self):
        text = html.tostring(self.root, pretty_print=True,
                             encoding='utf-8').decode('utf-8')
        with open(self.path, mode='w') as f:
            f.write(text)


class HtmlizedMmlBuilder:
    """HTMLized MMLをarticleアプリケーション用に書き換える

    Attributes:
        from_dir(os.path): Directory where HTMLized MML files for input.
        to_dir(os.path): Directory where generated HTML files for output.
    """
    from_dir = settings.MML_HTML_DIR
    to_dir = settings.PRODUCT_HTMLIZEDMML_DIR

    def delete_files(self):
        """Delete current HTML files.
        """
        if os.path.exists(self.to_dir):
            shutil.rmtree(self.to_dir)
        os.mkdir(self.to_dir)

    def create_files(self):
        """Create HTML files.
        """
        html_paths = glob.glob(os.path.join(self.from_dir, "*.html"))
        if not os.path.exists(self.to_dir):
            os.mkdir(self.to_dir)
        for from_path in tqdm(html_paths, desc='Creating Htmlized MML'):
            basename = os.path.basename(from_path)
            to_path = os.path.join(self.to_dir, basename)
            raw_html_file = HtmlFile(from_path)
            raw_html_file.read()
            product_html_file = HtmlFile(to_path)
            product_html_file.root = self.convert_head(os.path.splitext(basename)[0], raw_html_file.root)
            product_html_file.write()
        print("Copying proofs...")
        shutil.copytree(
            os.path.join(self.from_dir, 'proofs'),
            os.path.join(self.to_dir, 'proofs')
        )
        print("Copying refs...")
        shutil.copytree(
            os.path.join(self.from_dir, 'refs'),
            os.path.join(self.to_dir, 'refs')
        )

    def convert_head(self, article_name, root):
        """Convert head element

        Args:
            root (lxml.etree._ElementTree): root tree.

        Returns:
            lxml.etree._ElementTree: root tree.
        """
        # Remove head elements
        for node in root.xpath('//head/*'):
            parent = node.getparent()
            parent.remove(node)
        head = root.xpath('//head')[0]

        # Add head elements
        head_elements = [
            html.Element('meta', id="article-meta-data", name=article_name),
            html.Element('link', href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", rel="stylesheet", integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", crossorigin="anonymous"),
            html.Element('script', src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js", integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW", crossorigin="anonymous"),
            html.Element('script', src="https://code.jquery.com/jquery-3.6.0.js", integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=", crossorigin="anonymous"),
            html.Element('script', src="/static/article/JavaScript/index.js"),
            html.Element('script', src="/static/article/JavaScript/htmlized_mml.js"),
            html.Element('link', rel="stylesheet", href="/static/article/CSS/index.css", type="text/css"),
            html.Element('script', type="text/javascript", src="/static/article/JavaScript/mathjax.js"),
            html.Element('script', src="https://polyfill.io/v3/polyfill.min.js?features=es6"),
            html.Element('script', id="MathJax-script", src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", type="text/javascript"),
        ]
        for element in head_elements:
            head.append(element)
        return root
