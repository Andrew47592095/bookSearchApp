
type Book = {
  affiliateUrl : string,
  artistName : string,
  author : string,
  availability : string,
  booksGenreId : string,
  chirayomiUrl : string,
  discountPrice : number,
  discountRate : number,
  hardware : string,
  isbn : string,
  itemCaption : string,
  itemPrice : number,
  itemUrl : string,
  jan : string,
  label : string,
  largeImageUrl : string,
  limitedFlag : number,
  listPrice : number,
  mediumImageUrl : string,
  os : string,
  postageFlag : string,
  publisherName : string,
  reviewAverage : string,
  reviewCount : number,
  salesDate : string,
  smallImageUrl : string,
  title : string,
}

export type Item = {
  Item : Book
}

export type Data = {
  GenreInformation : string | number[],
  Items : Item[],
  carrier : number,
  count : number,
  first : number,
  hits : number,
  last : number,
  page : number,
  pageCount : number
}