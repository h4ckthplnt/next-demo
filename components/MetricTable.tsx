import React, { FunctionComponent } from 'react';
import { Table, Container} from 'reactstrap';
import { formatDate } from '../utils/dates';

type MetricTableProps = {
    metricData?: Array<Record<string, string>>;
}

const MetricTable: FunctionComponent<MetricTableProps> = ({
    metricData = []
}) => 
    <Container>
        <Table>
            <thead>
                <tr>
                <th>
                    Value
                </th>
                <th style={{textAlign: "right"}}>
                    Timestamp
                </th>
                </tr>
            </thead>
            <tbody>
                {metricData && metricData.map((data, idx) => {
                    const {value, timestamp} = data;
                    return(
                        <tr key={`${timestamp}-${idx}`}>
                            <th scope="row">
                                {value}
                            </th>
                            <td style={{textAlign: "right"}}>
                                {formatDate(timestamp)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </Container>
    

export default MetricTable;