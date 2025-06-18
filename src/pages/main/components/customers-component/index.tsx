import { customers } from '@mocks/customer';
import CustomerComponent from '../customer-component';

import './style.scss';

export default function CustomersComponent() {
  return (
    <div className="customers">
      {customers.map((customer, index) => {
        return <CustomerComponent {...customer} key={index} />;
      })}
    </div>
  );
}
