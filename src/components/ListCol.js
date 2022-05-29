import React from 'react'

const ListCol = (props) => {
  return (
    <div className={props.classNameCol}>
      <div className={props.classNameN} >{props.name}</div>
      <div className={props.classNameD}>
        {props.desc}
      </div>
    </div>
)
}

export default ListCol