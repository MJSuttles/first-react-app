import React from 'react';
import Form from '@/components/Form';

const sampleData = {
  firebaseKey: '-O8DU44KjMoxGy532KgX',
  name: 'Brian Suttles',
  text: 'The sky is blue',
  userId: 'hUu9g9EaOwW4uM3OCjqmeCVeVqI3',
};

export default function FormPage() {
  return (
    <div>
      <h2>CREATE</h2>

      <Form />
      <h2>UPDATE</h2>
      <Form obj={sampleData} />
    </div>
  );
}
