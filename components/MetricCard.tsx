import React, { FunctionComponent, } from 'react';
import { Card, Button,  Row, CardBody, CardTitle, CardSubtitle, ButtonToolbar} from 'reactstrap';
import Link from 'next/link';
import { formatDate } from '../utils/dates';

type MetricCardProps = {
    name: string;
    idx: number;
    timestamp: string;
    id: number;
    deleteMetric: () => void;
}

const MetricCard: FunctionComponent<MetricCardProps> = ({
    name,
    idx,
    timestamp,
    id,
    deleteMetric
}) => (
    <Row key={`${name}-${idx}`} className="mx-4 my-2">
        <Card>
        <CardBody>
            <CardTitle tag="h5">
            {name}
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
            {formatDate(timestamp)}
            </CardSubtitle>
            <ButtonToolbar>
                <Link href="/metric/[mid]" as={`/metric/${id}`}>
                    <Button 
                        style={{ backgroundColor: "#3E50B5"}}
                        className="me-2">
                        Open
                    </Button>
                </Link>
            <Button 
                style={{ backgroundColor: "#F51457" }}
                onClick={deleteMetric}>
                Delete
            </Button>
            </ButtonToolbar>
        </CardBody>
        </Card>
    </Row>
);

export default MetricCard;