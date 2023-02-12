export const CATEGORY_MAP = ['SNEAKERS', 'T - SHIRT', 'PANTS', 'CAP', 'HOODIE']

export const TAKE = 9

export const FILTERS = [
  {
    label: '최신순',
    value: 'latest'
  },
  {
    label: '가격 높은순',
    value: 'expensive'
  },
  {
    label: '가격 낮은순',
    value: 'cheap'
  }
]

export const getOrderBy = (orderBy?: string) => {
  return orderBy
    ? orderBy === 'latest'
      ? {
          orderBy: {
            createAt: 'desc'
          }
        }
      : orderBy === 'expensive'
      ? {
          orderBy: {
            price: 'desc'
          }
        }
      : {
          orderBy: {
            price: 'asc'
          }
        }
    : undefined
}
