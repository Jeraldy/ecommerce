import React from "react";
import { Table } from 'antd';

const TableData =(props)=>{
return(
<Table scroll={{ x: 400,y: 400 }} columns={props.columns} dataSource={props.data} bordered pagination={props.pagination} loading={props.loading} />
);
}
export default TableData;