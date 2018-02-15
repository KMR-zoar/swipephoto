let paginate = (TargetArray, limit, page) => {
   let itemCount = TargetArray.length;
   const pageCount = Math.ceil(itemCount / limit);
   if (pageCount < page) {
      return "false";
   }
   let start = (page  - 1) * limit;
   let end = start + limit;
   const resultObj = {
      array: TargetArray.slice(start, end),
      maxPage: pageCount,
      page: page
   }
   return resultObj;
};

module.exports = paginate;