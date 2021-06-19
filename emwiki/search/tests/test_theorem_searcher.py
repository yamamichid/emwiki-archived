from django.test import TestCase

from search.theorem_searcher import TheoremSearcher


class TheoremSearcherTest(TestCase):
    def test_search(self):
        query_text = "j < i implies i -' (j + 1) + 1 = i -' j;"
        searcher = TheoremSearcher()
        search_results = searcher.search(query_text, 100)
        search_results = sorted(search_results, key=lambda x: x['relevance'], reverse=True)
        self.assertEqual(search_results[0]['label'], 'NAT_2:7')
        self.assertEqual(len(search_results[0]), 6)
        self.assertEqual(len(search_results), 100)
