import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';
import { MDBIcon } from 'mdbreact';
import { FileOutlined, InboxOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from '../../utils/Badge';

const {Title} = Typography;


const List = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then(res => {
      setAllData(res.data);
    });
  });

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      title: 'Review',
      dataIndex: 'review'
    },
  ];

  const data = [{
  }];

  allData.map((user: any) => {
    data.push({
     key: user.id,
     username: user.username,
     email: user.email,
     gender: user.gender,
     review: user.review + '%',
   })
   return data;
 });

  const handleClick = () => {
    history.push('/form')
  }

  return (
 
      <div className="container-flex" >           
            
                       
                <div className="card mb-4" style={{borderColor:"#FFA233"}}>
                 
                    <div className="card-body text-warning">

                            <h4 className="card-title" style={{color:"#FFA233"}}><strong>
                            
                            <InboxOutlined style={{ fontSize: '40px', color: '#FFA233' }} /> <span>{}</span>
                                Cajas
                            </strong></h4>

                            <div className="list-group d-flex">
                                <a href="/pendientes" className="list-group-item list-group-item-action">Pendientes Cierre
                                    {/* <span className="badge badge-warning badge-pill float-right" style={{font:"size:0.9em"}}>14</span> */}
                                    <Badge amount={10} />
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">Pendientes Devolución
                                  <Badge amount={2} />
                                </a>               
                            </div> 

                    </div>
                </div>
                


                
                <div className="card border-warning mb-4">
                    
                    <div className="card-body text-warning">
            
                        <h4 className="card-title" style={{color:"#FFA233"}}><strong>
                        <FileOutlined style={{ fontSize: '35px', color: '#FFA233' }} /><span>{}</span>
                            Documentos
                        </strong></h4>

                        <div className="list-group d-flex">
                            <a href="#" className="list-group-item list-group-item-action">Pendientes Devolución
                              <Badge amount={0} />
                            </a>              
                        </div> 

                    </div>
                </div>
                


                
                <div className="card border-warning mb-4">

                    <div className="card-body text-warning">
       
                        <h4 className="card-title" style={{color:"#FFA233"}}><strong>
                        
                        <ShoppingCartOutlined style={{ fontSize: '35px', color: '#FFA233' }} /> <span>{}</span>
                            Pedidos
                        </strong></h4>

                        <div className="list-group d-flex">
                            <a href="#" className="list-group-item list-group-item-action">
                                Pendientes de Envio
                                <Badge amount={8} />
                            </a>                        
                            <a href="#" className="list-group-item list-group-item-action">
                                Por Resolver
                                <Badge amount={30} />
                            </a>                        
                            <a href="#" className="list-group-item list-group-item-action">
                                Resueltos
                            <span className="badge badge-success badge-pill float-right" style={{font:"size:0.9em"}}>20</span>                                            
                            </a>                        
                            <a href="#" className="list-group-item list-group-item-action">
                                Rechazados
                            <span className="badge badge-danger badge-pill float-right" style={{font:"size:0.9em"}}>15</span>                      
                            </a>                 
                        </div> 

                    </div>
                </div>
               


              </div>

      
      
  );
}

export default List;