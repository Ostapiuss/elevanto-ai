export interface BlogNumericArticleItem {
  article: string;
  description: string;
}

export interface BlogArticleItem {
  article: string;
  description: string;
}

export interface BlogItem {
  categoryName: string;
  title: string;
  description: string;
  date: string;
  mainListTitle: string;
  readDelay: string;
  keyWords: string;
  list: BlogNumericArticleItem[];
  textList: BlogArticleItem[];
}
