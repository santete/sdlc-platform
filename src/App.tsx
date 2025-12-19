import React, { useState } from 'react';
import { Server, Code, FileCode, GitBranch, Rocket, Database, Terminal } from 'lucide-react';

const SDLCWorkflowSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Server },
    { id: 'architecture', label: 'Architecture', icon: GitBranch },
    { id: 'backend', label: 'Backend Code', icon: Database },
    { id: 'frontend', label: 'Frontend Code', icon: Code },
    { id: 'deployment', label: 'Deployment', icon: Rocket },
    { id: 'quickstart', label: 'Quick Start', icon: Terminal }
  ];

  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-2">AI-Powered SDLC Workflow System</h2>
        <p className="text-purple-100">Complete Software Development Life Cycle with Multi-Agent AI</p>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">SDLC Workflow Steps</h3>
        <div className="space-y-3">
          {[
            { step: '1', agent: 'Requirements Agent', task: 'Analyze requirements → Create user stories', color: 'blue' },
            { step: '2', agent: 'Design Agent', task: 'Generate architecture + DB schema + API design', color: 'purple' },
            { step: '3', agent: 'Implementation Agent', task: 'Generate backend (Python) + frontend (React) code', color: 'green' },
            { step: '4', agent: 'Testing Agent', task: 'Create unit tests + integration tests', color: 'orange' },
            { step: '5', agent: 'Deployment Agent', task: 'Generate Dockerfile + docker-compose + K8s configs', color: 'red' }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className={`bg-${item.color}-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0`}>
                {item.step}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{item.agent}</h4>
                <p className="text-sm text-gray-600">{item.task}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">Backend Stack</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Python FastAPI</li>
            <li>• PostgreSQL</li>
            <li>• SQLAlchemy ORM</li>
            <li>• Redis Cache</li>
            <li>• OpenTelemetry</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h4 className="font-bold text-green-800 mb-2">Frontend Stack</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• React 18</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• Vite Build Tool</li>
            <li>• Fetch API</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
          <h4 className="font-bold text-purple-800 mb-2">Infrastructure</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Docker Containers</li>
            <li>• Docker Compose</li>
            <li>• Kubernetes Ready</li>
            <li>• Prometheus</li>
            <li>• Jaeger Tracing</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ArchitectureTab = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">System Architecture</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold text-blue-800 mb-2">API Layer (FastAPI)</h4>
            <p className="text-sm text-gray-700">REST endpoints for workflows, agents, executions, traces</p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-bold text-purple-800 mb-2">Orchestration Layer</h4>
            <p className="text-sm text-gray-700">Workflow Engine + Agent Registry + Task Scheduler</p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-bold text-green-800 mb-2">Agent Layer</h4>
            <p className="text-sm text-gray-700">5 specialized agents (Requirements, Design, Implementation, Testing, Deployment)</p>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-bold text-orange-800 mb-2">LLM Adapter Layer</h4>
            <p className="text-sm text-gray-700">OpenAI, Anthropic, Gemini, Local LLM adapters</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold text-yellow-800 mb-2">Observability Layer</h4>
            <p className="text-sm text-gray-700">OpenTelemetry tracing + Prometheus metrics + Structured logs</p>
          </div>
          
          <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded">
            <h4 className="font-bold text-gray-800 mb-2">Persistence Layer</h4>
            <p className="text-sm text-gray-700">PostgreSQL + Redis + Config Store</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Project Structure</h3>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
          <pre>{`sdlc-ai-workflow/
├── backend/                    # Python FastAPI
│   ├── app/
│   │   ├── main.py            # FastAPI app
│   │   ├── models/            # SQLAlchemy models
│   │   ├── schemas/           # Pydantic schemas
│   │   ├── services/
│   │   │   ├── orchestrator.py
│   │   │   ├── agent_registry.py
│   │   │   └── tracer.py
│   │   ├── agents/
│   │   │   ├── base.py
│   │   │   ├── requirements_agent.py
│   │   │   ├── design_agent.py
│   │   │   ├── implementation_agent.py
│   │   │   ├── testing_agent.py
│   │   │   └── deployment_agent.py
│   │   ├── adapters/
│   │   │   ├── openai_adapter.py
│   │   │   └── anthropic_adapter.py
│   │   └── api/               # API endpoints
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                   # React + TypeScript
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── services/api.ts
│   │   └── types/
│   ├── package.json
│   └── Dockerfile
├── config/
│   └── workflows/
│       └── sdlc-workflow.yaml
└── docker-compose.yml`}</pre>
        </div>
      </div>
    </div>
  );

  const BackendTab = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Backend Implementation</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-700 mb-2">1. Main Application (app/main.py)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SDLC AI Workflow")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "SDLC AI Workflow API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

# Include routers
from app.api import workflows, agents, executions
app.include_router(workflows.router, prefix="/api/v1/workflows")
app.include_router(agents.router, prefix="/api/v1/agents")
app.include_router(executions.router, prefix="/api/v1/executions")`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">2. Base Agent (app/agents/base.py)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`from abc import ABC, abstractmethod
from typing import Dict, Any
from dataclasses import dataclass

@dataclass
class AgentMetadata:
    id: str
    name: str
    capabilities: list

class BaseAgent(ABC):
    def __init__(self, metadata: AgentMetadata, llm_adapter):
        self.metadata = metadata
        self.llm_adapter = llm_adapter
    
    async def execute(self, task: Dict[str, Any]) -> Dict:
        try:
            output = await self._execute_task(task)
            return {"success": True, "output": output}
        except Exception as e:
            return {"success": False, "error": str(e)}
    
    @abstractmethod
    async def _execute_task(self, task: Dict[str, Any]) -> Any:
        pass`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-purple-700 mb-2">3. Requirements Agent (app/agents/requirements_agent.py)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`from app.agents.base import BaseAgent, AgentMetadata

class RequirementsAgent(BaseAgent):
    def __init__(self, llm_adapter):
        metadata = AgentMetadata(
            id="requirements_agent",
            name="Requirements Agent",
            capabilities=["requirements_analysis"]
        )
        super().__init__(metadata, llm_adapter)
    
    async def _execute_task(self, task: Dict[str, Any]) -> Any:
        requirements = task.get('requirements', '')
        
        prompt = f"""
Analyze the following requirements and create:
1. Functional requirements
2. User stories
3. Acceptance criteria

Requirements: {requirements}
"""
        result = await self.llm_adapter.complete(prompt)
        return {"analysis": result}`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-orange-700 mb-2">4. Workflow Orchestrator (app/services/orchestrator.py)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`class WorkflowEngine:
    def __init__(self):
        self.workflows = {}
    
    async def execute_workflow(self, workflow_id: str, input_data: dict):
        workflow = self.workflows[workflow_id]
        context = input_data.copy()
        results = []
        
        for step in workflow['steps']:
            agent = agent_registry.get_agent(step['agent_id'])
            task_input = self._resolve_inputs(step['input'], context)
            result = await agent.execute(task_input)
            
            if result['success']:
                context[step['output_var']] = result['output']
                results.append(result)
            else:
                raise Exception(f"Step failed: {result['error']}")
        
        return {"status": "completed", "results": results}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FrontendTab = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Frontend Implementation</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-700 mb-2">1. Main App (src/App.tsx)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex gap-6">
          <button onClick={() => setView('dashboard')}>
            Dashboard
          </button>
          <button onClick={() => setView('workflows')}>
            Workflows
          </button>
          <button onClick={() => setView('executions')}>
            Executions
          </button>
        </div>
      </nav>
      
      <main className="container mx-auto p-6">
        {view === 'dashboard' && <Dashboard />}
        {view === 'workflows' && <WorkflowList />}
        {view === 'executions' && <ExecutionList />}
      </main>
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">2. API Service (src/services/api.ts)</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`const API_BASE = 'http://localhost:8000/api/v1';

export const api = {
  workflows: {
    list: async () => {
      const res = await fetch(\`\${API_BASE}/workflows\`);
      return res.json();
    },
    execute: async (workflowId: string, inputData: any) => {
      const res = await fetch(
        \`\${API_BASE}/workflows/\${workflowId}/execute\`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input_data: inputData })
        }
      );
      return res.json();
    }
  },
  executions: {
    list: async () => {
      const res = await fetch(\`\${API_BASE}/executions\`);
      return res.json();
    },
    get: async (executionId: string) => {
      const res = await fetch(\`\${API_BASE}/executions/\${executionId}\`);
      return res.json();
    }
  }
};`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-purple-700 mb-2">3. Workflow Component</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:8000/api/v1';

function WorkflowList() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`\${API_BASE}/workflows\`)
      .then(res => res.json())
      .then(data => {
        setWorkflows(data.workflows);
        setLoading(false);
      });
  }, []);

  const executeWorkflow = async (workflowId: string) => {
    const inputData = {
      project_requirements: "Build a todo app"
    };
    
    const res = await fetch(\`\${API_BASE}/workflows/\${workflowId}/execute\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input_data: inputData })
    });
    
    const result = await res.json();
    alert(\`Execution started: \${result.execution_id}\`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {workflows.map(wf => (
        <div key={wf.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{wf.name}</h3>
          <button 
            onClick={() => executeWorkflow(wf.id)}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Execute
          </button>
        </div>
      ))}
    </div>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DeploymentTab = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Docker Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-blue-700 mb-2">1. Backend Dockerfile</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-green-700 mb-2">2. Frontend Dockerfile</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-purple-700 mb-2">3. docker-compose.yml</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: sdlc_user
      POSTGRES_PASSWORD: sdlc_pass
      POSTGRES_DB: sdlc_workflow
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgresql://sdlc_user:sdlc_pass@postgres:5432/sdlc_workflow
      REDIS_URL: redis://redis:6379/0
      OPENAI_API_KEY: \${OPENAI_API_KEY}
    ports:
      - "8000:8000"
    depends_on:
      - postgres
      - redis
    volumes:
      - ./backend:/app

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  postgres_data:`}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-orange-700 mb-2">4. requirements.txt</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto">
              <pre>{`fastapi==0.109.0
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
psycopg2-binary==2.9.9
redis==5.0.1
openai==1.10.0
anthropic==0.18.1
pydantic==2.5.3
python-jose[cryptography]==3.3.0
pytest==7.4.4`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const QuickStartTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">🚀 Quick Start Guide</h3>
        <p className="text-green-100">Deploy locally in 5 minutes</p>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Step-by-Step Deployment</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold text-blue-800 mb-2">Step 1: Prerequisites</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>• Install Docker Desktop</p>
              <p>• Install Git</p>
              <p>• Get OpenAI API key (optional: Anthropic)</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-bold text-green-800 mb-2">Step 2: Clone & Setup</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mt-2">
              <pre>{`# Clone repository
git clone https://github.com/your-org/sdlc-ai-workflow
cd sdlc-ai-workflow

# Create .env file
cat > .env << EOF
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
EOF`}</pre>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-bold text-purple-800 mb-2">Step 3: Start Services</h4>
            <div className="bg-gray-900 text-purple-400 p-3 rounded font-mono text-xs mt-2">
              <pre>{`# Start all services
docker-compose up -d

# Check logs
docker-compose logs -f backend

# Verify services
docker-compose ps`}</pre>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-bold text-orange-800 mb-2">Step 4: Initialize Database</h4>
            <div className="bg-gray-900 text-orange-400 p-3 rounded font-mono text-xs mt-2">
              <pre>{`# Run migrations
docker-compose exec backend alembic upgrade head

# (Optional) Seed data
docker-compose exec backend python scripts/seed_data.py`}</pre>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h4 className="font-bold text-red-800 mb-2">Step 5: Access Applications</h4>
            <div className="text-sm text-gray-700 space-y-1 mt-2">
              <p>• Frontend: <a href="http://localhost:3000" className="text-blue-600 underline">http://localhost:3000</a></p>
              <p>• Backend API: <a href="http://localhost:8000" className="text-blue-600 underline">http://localhost:8000</a></p>
              <p>• API Docs: <a href="http://localhost:8000/docs" className="text-blue-600 underline">http://localhost:8000/docs</a></p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold text-yellow-800 mb-2">Step 6: Test Workflow</h4>
            <div className="bg-gray-900 text-yellow-400 p-3 rounded font-mono text-xs mt-2">
              <pre>{`# Execute SDLC workflow
curl -X POST http://localhost:8000/api/v1/workflows/sdlc-complete-workflow/execute \\
  -H "Content-Type: application/json" \\
  -d '{
    "input_data": {
      "project_requirements": "Build a todo list app with user auth"
    }
  }'

# Response includes:
# - execution_id
# - trace_id
# - Generated code (backend + frontend)
# - Tests
# - Deployment configs`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-green-300">
        <h3 className="text-xl font-bold mb-4 text-green-800">✅ What You Get</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Complete SDLC workflow (5 agents)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Backend API (FastAPI + PostgreSQL)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Frontend UI (React + TypeScript)</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Distributed tracing (OpenTelemetry)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Production-ready Docker configs</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Full observability stack</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
        <h4 className="font-bold text-blue-800 mb-2">📝 Common Commands</h4>
        <div className="bg-gray-900 text-blue-400 p-3 rounded font-mono text-xs">
          <pre>{`# Stop services
docker-compose down

# Rebuild services
docker-compose up -d --build

# View logs
docker-compose logs -f [service_name]

# Run tests
docker-compose exec backend pytest
docker-compose exec frontend npm test

# Database reset
docker-compose down -v
docker-compose up -d`}</pre>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'architecture': return <ArchitectureTab />;
      case 'backend': return <BackendTab />;
      case 'frontend': return <FrontendTab />;
      case 'deployment': return <DeploymentTab />;
      case 'quickstart': return <QuickStartTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex gap-2 flex-wrap">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {renderContent()}

        <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 mb-3">🎯 System Highlights</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-purple-700 mb-1">AI-Powered SDLC</p>
              <p className="text-gray-700">5 specialized agents working together</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700 mb-1">Full Stack</p>
              <p className="text-gray-700">Python Backend + React Frontend</p>
            </div>
            <div>
              <p className="font-semibold text-green-700 mb-1">Observable</p>
              <p className="text-gray-700">End-to-end tracing & metrics</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700 mb-1">Config-Driven</p>
              <p className="text-gray-700">YAML workflows, no code changes</p>
            </div>
            <div>
              <p className="font-semibold text-red-700 mb-1">Production-Ready</p>
              <p className="text-gray-700">Docker + K8s deployment</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-700 mb-1">Quick Setup</p>
              <p className="text-gray-700">Deploy locally in 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDLCWorkflowSystem;