import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../Layouts/Pageheader/Pageheader';
import { BasicDataTable } from './list';
import styles from './DataTables.module.scss';

const DataTables = () => {

	return (

		<div className={styles.DataTables}>
			<Pageheader titles="Usuarios" active="Lista de usuarios" />

			<Row className="row-sm">
				<Col lg={12} className="">
					<Card className="">
						<Card.Body>
							<BasicDataTable />
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
