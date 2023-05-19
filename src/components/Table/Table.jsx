import React from 'react';
import {Link} from 'react-router-dom'
import '@components/Table/Table.scss'

export default function Table({title, data, aliases = {}, fields = []}) {

  const filteredColumnNames = Object.keys(data[0]).filter(
      columnName => columnName !== "id" && fields.includes(columnName)
  );


  return (
      <table className='table'>
        <caption className='table__caption'>{title}</caption>
        <thead className='table__header'>
        <tr className='table__header-row'>
          {filteredColumnNames.map((columnName, index) => (
              <th className='table__header-row__cell' key={index}>{aliases[columnName] || columnName}</th>
          ))}
        </tr>
        </thead>
        <tbody className='table__body'>
        {data.map((row, rowIndex) => (
            <tr className='table__body__row' key={rowIndex}>
              <td className='table__body__cell table__body__cell--title'>
                <Link to={`/dashboard/rolodex/${title.toLowerCase()}/${row.id}`} >
                  {row[filteredColumnNames[0]]}
                </Link>
              </td>

              {filteredColumnNames.slice(1).map((columnName, columnIndex) => (
                  <td className='table__body__cell' key={columnIndex}><span>{`${aliases[columnName] || columnName}:`}</span> <span>{`${row[columnName]}`}</span></td>
              ))}
            </tr>
        ))}
        </tbody>
      </table>
  );
};


