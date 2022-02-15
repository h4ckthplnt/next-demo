import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Header from '../components/Header';
import CreateModal from '../components/CreateModal';
import MetricCard from '../components/MetricCard';
import * as api from '../utils/api'


const Metrics = () => {
  const [showModal, setShowModal] = useState(false);
  const [metrics, setMetrics] = useState([]);

  const createMetric = async (name: string) => {
    await api.createMetric({ name });
    setShowModal(false);
    await fetchMetrics();
  }

  const deleteMetric = async (id) => {
    await api.deleteMetric(id);
    await fetchMetrics();
  }

  const fetchMetrics = async () => {
    const data = await api.getMetrics();
    setMetrics(data);
  }

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <>
    <Header onClick={() => setShowModal(true)} />
      <Col md={12}>
        {metrics.length > 0 && metrics.map((metric, idx) => {
          const { name, timestamp, id } = metric;
          return(
            <MetricCard
            name={name}
            idx={idx}
            timestamp={timestamp}
            id={id}
            deleteMetric={() => deleteMetric(id)} />
          );
        })}
        <CreateModal 
          isOpen={showModal} 
          closeModal={() => setShowModal(false)}
          createMetric={createMetric}/>
      </Col>
      
    </>
  )
};

export default Metrics;