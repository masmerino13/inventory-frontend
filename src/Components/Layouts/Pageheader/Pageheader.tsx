import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Pageheader.module.scss';

const Pageheader = (props) => {
  return (
    <div className={styles.Pageheader}>
      <div className="breadcrumb-header justify-content-between">
        <div className="my-auto">
          <div className="d-flex">
            <h4 className="content-title mb-0 my-auto">{props.titles}</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ {props.active}</span>
          </div>
        </div>
        <div className="d-sm-flex">
          <div className="d-flex my-xl-auto right-content">
            <div className="pe-1 mb-xl-0">
              {
                // 
              }
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
};

Pageheader.defaultProps = {};

export default Pageheader;
