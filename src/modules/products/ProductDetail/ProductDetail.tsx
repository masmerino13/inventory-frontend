import React from 'react';
import { Button, Card, Col, Dropdown, Form, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import { useMutation, useQueryClient, useQuery } from 'react-query'
import { Link, useParams } from "react-router-dom";

import { getProductDetail } from '../../../core/api'
import { Product } from '../../../core/interfaces/product.interface'

import Pageheader from '../../../Components/Layouts/Pageheader/Pageheader';
import { Loader } from '../../../Components/common';

import styles from './ProductDetail.module.scss';

import faces6 from '../../../../src/assets/img/users/6.jpg';

function ProductDetail() {
	const { id = '' } = useParams();

	const productDetail = useQuery<Product, Error>('product', () => getProductDetail(id))

	console.log('productDetail', productDetail)

	return (
		<div className={styles.Profile}>
			<Pageheader titles="Productos" active="Detalle del producto" />

			<Row className="row-sm">
				{
					productDetail.isLoading && <Loader />
				}
				{
					productDetail.isFetched && <>
						<Col xl={4}>
							<Card className="mg-b-20">
								<Card.Body>
									<div className="ps-0">
										<div className="main-profile-overview">
											<div className="main-img-user profile-user">
												<img alt="" src={faces6} /><Link
													className="fas fa-camera profile-edit" to="#"></Link>
											</div>
											<div className="d-flex justify-content-between mg-b-20">
												<div>
													<h5 className="main-profile-name">{productDetail.data?.description}</h5>
													<p className="main-profile-name-text">{productDetail.data?.category}</p>
												</div>
											</div>
											<h6>Codigo</h6>
											<div className="main-profile-bio">{productDetail.data?.code}</div>
											<h6>Precio Quetzales</h6>
											<div className="main-profile-bio">{productDetail.data?.priceQuetzales}</div>
											<h6>Precio Dolares</h6>
											<div className="main-profile-bio">{productDetail.data?.priceQuetzales}</div>
											<h6>Categoria</h6>
											<div className="main-profile-bio">{productDetail.data?.category}</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={8}>
							<Row className="row-sm">
								<Col sm={12} xl={4} lg={12} md={12}>
									<Card>
										<Card.Body>
											<div className="counter-status d-flex md-mb-0">
												<div className="counter-icon bg-primary-transparent">
													<i className="icon-layers text-primary"></i>
												</div>
												<div className="ms-auto">
													<h5 className="tx-13">Existencia total</h5>
													<h2 className="mb-0 tx-22 mb-1 mt-1">10</h2>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col sm={12} xl={4} lg={12} md={12}>
									<Card>
										<Card.Body>
											<div className="counter-status d-flex md-mb-0">
												<div className="counter-icon bg-danger-transparent">
													<i className="icon-paypal text-danger"></i>
												</div>
												<div className="ms-auto">
													<h5 className="tx-13">Transacciones totales</h5>
													<h2 className="mb-0 tx-22 mb-1 mt-1">20</h2>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col sm={12} xl={4} lg={12} md={12}>
									<Card>
										<Card.Body>
											<div className="counter-status d-flex md-mb-0">
												<div className="counter-icon bg-success-transparent">
													<i className="icon-rocket text-success"></i>
												</div>
												<div className="ms-auto">
													<h5 className="tx-13">Precio unitario</h5>
													<h2 className="mb-0 tx-22 mb-1 mt-1">0.0</h2>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<Card>
								<Card.Body>

									<Tab.Container id="left-tabs-example" defaultActiveKey="equivalentes">
										<Nav className='profile navtab-custom panel-tabs'>
											<Nav.Item as='li'>
												<Nav.Link className='hidden-xs' eventKey="equivalentes"><i className="las la-user-circle tx-16 me-1 visible-xs"></i>Equivalentes</Nav.Link>
											</Nav.Item>
											<Nav.Item as='li'>
												<Nav.Link className='hidden-xs' eventKey="kardex"><i className="las la-cog tx-16 me-1 visible-xs"></i>Kardex</Nav.Link>
											</Nav.Item>
										</Nav>

										<Tab.Content className='border p-4 br-dark'>
											<Tab.Pane eventKey="equivalentes">
												<div></div>
											</Tab.Pane>
											<Tab.Pane eventKey="kardex">
												<div></div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</Card.Body>
							</Card>
						</Col>
					</>
				}
			</Row>
		</div>
	);
}




ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
