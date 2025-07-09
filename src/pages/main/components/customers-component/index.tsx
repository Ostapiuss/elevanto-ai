import { customers } from '@mocks/customer';
import { CustomerItem } from '@interfaces/shared-interfaces';

import CustomerComponent from '../customer-component';

import './style.scss';

export default function CustomersComponent() {
  const columns: Array<Array<CustomerItem>> = [[], [], []];

  customers.forEach((customer, index) => {
    if (index < 2) {
      columns[0].push(customer);
    } else {
      const targetColIndex = ((index - 2) % 2) + 1;
      columns[targetColIndex].push(customer);
    }
  });

  return (
    <div className="customers">
      <div className="col col1">
        {columns[0].map((customer, i) => (
          <CustomerComponent key={`col1-${i}`} {...customer} />
        ))}
      </div>
      <div className="col col2">
        {columns[1].map((customer, i) => (
          <CustomerComponent key={`col2-${i}`} {...customer} />
        ))}
      </div>
      <div className="col col3">
        {columns[2].map((customer, i) => (
          <CustomerComponent key={`col3-${i}`} {...customer} />
        ))}
      </div>
    </div>
  );
}
