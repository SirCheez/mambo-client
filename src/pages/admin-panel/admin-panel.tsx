import React, { Component } from 'react'
import './admin-panel.scss'
import AdminSidebarNavigation from '../../components/admin-sidebar-navigation/admin-sidebar-navigation'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminProducts from '../../components/admin-products/admin-products';
import AddProduct from '../../components/add-product/add-product';
import EditProduct from '../../components/edit-product/edit-product';
import OrdersList from '../../components/orders-list/orders-list';

export default class AdminPanel extends Component {
    render() {
        return (
            <div className='admin-panel-container'>
                <AdminSidebarNavigation/>
                <div className='admin-panel-content'>
                    <Router>
                        <Switch>
                            <Route path='/shop-admin' exact component={AdminProducts}/>
                            <Route path='/shop-admin/add-product/' component={AddProduct}/>
                            <Route path='/shop-admin/edit-product/:id' component={EditProduct}/>
                            <Route path='/shop-admin/orders' component={OrdersList}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}
