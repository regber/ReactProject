import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'



const PostFilter = ({filter,setFilter}) => {
    
    var options=[{value:'title',name:'По названию'},{value:'body',name:'По содержимому'}];

  return (
    <div>
        <MyInput value={filter.filter} placeholder='Search' onChange={e=>setFilter({...filter,filter:e.target.value})}></MyInput>
        <MySelect value={filter.sort}  options={options} onChange={e=>setFilter({...filter,sort:e})} defaultVlue='Выберете сортировку' />
    </div>
  )
}

export default PostFilter;