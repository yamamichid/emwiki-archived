export default interface ArticleModel {
  data: string[];
  directed: boolean;
  multigraph: boolean;
  elements: Record<
    string, Record<
      string, Record<
        string, any
      >
    >[]
  >
}
