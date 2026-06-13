import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlServersApi implements ICredentialType {
        name = 'N8nDevAzureSqlServersApi';

        displayName = 'Azure SQL Servers API';

        icon: Icon = { light: 'file:../nodes/AzureSqlServers/azure-sql-servers.png', dark: 'file:../nodes/AzureSqlServers/azure-sql-servers.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Servers API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
