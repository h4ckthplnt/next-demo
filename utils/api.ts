const API_BASE_URL = `http://127.0.0.1:5000`;

export const getMetrics = async () => {
    const request = await fetch(`${API_BASE_URL}/metrics`);
    const body = await request.json();
    return body.metrics;
}

export const getMetricRecordsets = async (id) => {
    const request = await fetch(`${API_BASE_URL}/metrics/${id}/recordset`);
    const body = await request.json();
    return body.values;
};

export const createMetric = async (data) => {
    const response = await fetch(`${API_BASE_URL}/metrics`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return await response.json();
}

export const createMetricRecordset = async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/metrics/${id}/recordset`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return await response.json();
}

export const deleteMetric = async (id) => {
    // Default options are marked with *
    const response = await fetch(`${API_BASE_URL}/metrics/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
    });
    return await response.json();
}