interface ArrayItem {
  id: number
  name: string
  pid: number
}

interface TreeItem extends ArrayItem {
  children: TreeItem[]
}

export const arr2Tree = (arr: ArrayItem[]): TreeItem[] => {
  const tree: TreeItem[] = []
  const hashMap: Map<number, TreeItem> = new Map(
    arr.map((item) => {
      const _item: TreeItem = {
        ...item,
        children: [],
      }
      return [item.id, _item]
    })
  )

  hashMap.forEach(({ id, pid }) => {
    const item = hashMap.get(id) as TreeItem
    const parent = hashMap.get(pid) as TreeItem

    if (parent) {
      parent.children.push(item)
    } else {
      tree.push(item)
    }
  })
  return tree
}
