import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import SearchBar from '../components/SearchBar'
import SortFilter from '../components/SortFilter'
import Pagination from '../components/Pagination'
import SkeletonCard from '../components/SkeletonCard'
import CardGrid from '../components/CardGrid'

function Posts() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts")

  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [filter, setFilter] = useState("")
  const [page, setPage] = useState(1)

  if (error) return <p>{error}</p>

  // ✅ FILTER (Posts → title + userId)
  let filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "" || item.userId === Number(filter))
  )

  // ✅ SORT
  filtered.sort((a, b) =>
    sortOrder === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  )

  // ✅ PAGINATION
  const perPage = 6
  const totalPages = Math.ceil(filtered.length / perPage)

  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  )

  return (
    <div>
      <h2>Posts</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <SortFilter
        type="posts"
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filter={filter}
        setFilter={setFilter}
      />

      {loading ? (
        Array(6).fill().map((_, i) => <SkeletonCard key={i} />)
      ) : (
        <CardGrid data={paginated} type="posts" />
      )}

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts