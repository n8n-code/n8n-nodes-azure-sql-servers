import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlServers implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Servers',
                name: 'N8nDevAzureSqlServers',
                icon: { light: 'file:./azure-sql-servers.png', dark: 'file:./azure-sql-servers.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database RESTful API manages database services.',
                defaults: { name: 'Azure SQL Servers' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlServersApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
