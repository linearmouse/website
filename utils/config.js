exports.CLUSTER_NAME = process.env.NEXT_PUBLIC_CLUSTER_NAME || process.env.CLUSTER_NAME || ''

exports.isMainlandChinaCluster = exports.CLUSTER_NAME === 'qcloud' || exports.CLUSTER_NAME === 'aliyun'
