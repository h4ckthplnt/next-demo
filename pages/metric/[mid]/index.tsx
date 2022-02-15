import React, { useEffect, useState } from 'react'
import MetricTable from '../../../components/MetricTable';
import Header from '../../../components/Header';
import UpdateModal from '../../../components/UpdateModal'
import { useRouter } from 'next/router';
import * as api from '../../../utils/api';

const MetricView = () => {
    const [metricData, setMetricData] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();
    const { mid } = router.query;

    const fetchMetricData = async (id: string) => {
        const data = await api.getMetricRecordsets(id);
        setMetricData(data);
    }

    const updateMetric = async (value: number) => {
        await api.createMetricRecordset(mid, { value });
        await fetchMetricData(mid as string);
    } 

    useEffect(() => {
        fetchMetricData(mid as string);
    }, [mid])

    return(
        <>      
            <Header 
                isRecordset={true} 
                onClick={() => setShowModal(true)}/>
            {metricData.length === 0 &&
                <p className="my-5 d-flex justify-content-center">
                    No Recordsets to Display
                </p>
            }
            {metricData && metricData.length > 0 &&
                <MetricTable 
                    metricData={metricData} />
            }
            <UpdateModal
                isOpen={showModal} 
                closeModal={() => setShowModal(false)} 
                updateMetric={updateMetric}/>
        </>
        
        
    );
}

export default MetricView;