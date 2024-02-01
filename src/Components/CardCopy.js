import React from 'react';
import { Card, Table } from 'react-bootstrap';

const CustomCardCopy = () => {
  return (
    <Card style={{ width: '22rem' }} className='information'>
      <Card.Body className='information-body'>
        <Card.Img className='rounded' variant="top" src="https://images.boatsgroup.com/images/1/32/23/8913223_20230619070622279_1_LARGE.jpg" />
        <Card.Title className='mt-3 mb-2 cardtitle'>Estrella</Card.Title>
        <Table className='details mb-0' striped="columns">
          <tbody>
            <tr className='cardhead'>
              <td className='cardtext-1'>Length</td>
              <td className='cardtext-2'>65</td>
            </tr>
            <tr className='cardhead'>
              <td className='cardtext-1'>Built</td>
              <td className='cardtext-2'>HCB 2024</td>
            </tr>
            <tr className='cardhead'>
              <td className='cardtext-1'>Location</td>
              <td className='cardtext-2'>Jupiter FL US</td>
            </tr>
            <tr className='footer'>
              <td className='footerhead'>
                <Card.Link className='mb-0 footerbtn-1' href="#">Contact</Card.Link>
              </td>
              <td className='footerhead'>
                <Card.Link className='mb-0 footerbtn-1' href="#">View more</Card.Link>
              </td>
            </tr>
          </tbody>
        </Table>
        <Card.Text className='float-tag'>2,149,000.00 USD</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCardCopy;