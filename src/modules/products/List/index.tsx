import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query'

import { getAllProducts } from '../../../core/api'
import { Product } from '../../../core/interfaces/product.interface'
import Pageheader from '../../../Components/Layouts/Pageheader/Pageheader';
import { BasicDataTable } from './list';
import styles from './DataTables.module.scss';

const DataTables = () => {
	const allProducts = useQuery<Array<Product>, Error>('productsList', async () => {
    return await getAllProducts()
  })

  const formattedData = (allProducts.data || []).map((product: Product) => ({
		productId: product.id,
    FNAME: product.description,
    LNAME: product.category,
    USER: product.code
  }))

	return (
		<div className={styles.DataTables}>
			<Pageheader titles="Productos" active="Lista de productos" />

			<Row className="row-sm">
				<Col lg={12} className="">
					<Card className="">
						<Card.Body>
							<BasicDataTable data={formattedData} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
