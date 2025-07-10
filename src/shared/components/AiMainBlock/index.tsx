/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactFlow, { useNodesState, useEdgesState, Handle } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomeNode';

import AiVoiceIcon from '@assets/svg/ai-voice.svg?react';
import AiChatBot from '@assets/svg/ai-chat.svg?react';
import AutomatedWorkflow from '@assets/svg/automated-workflow.svg?react';
import AutomatedCrm from '@assets/svg/automated-srm.svg?react';
import InvoiceBilling from '@assets/svg/billing-ai.svg?react';
import PhoneIcon from '@assets/svg/phone-inbound.svg?react';
import CustomTag from '@shared/components/CustomTag';

import CalendarIcon from '@assets/svg/calendar.svg?react';
import AvailabilityIcon from '@assets/svg/availability.svg?react';
import SmallPlusIcon from '@assets/svg/small-plus-icon.svg?react';

import WorldIntegration from '@assets/svg/world-integration.svg?react';
import WorldMultiLanguage from '@assets/svg/world-multilanguage.svg?react';
import LeadQuality from '@assets/svg/lead-quality.svg?react';

import TaskAutomation from '@assets/svg/task-automation.svg?react';
import DeadlineIcon from '@assets/svg/deadline-icon.svg?react';
import PuzzleIcon from '@assets/svg/puzzle-icon.svg?react';

import ContactIcon from '@assets/svg/contact-icon.svg?react';
import PerfomanceIcon from '@assets/svg/perfomance-icon.svg?react';
import MobileIcon from '@assets/svg/mobile-icon.svg?react';

import ListIcon from '@assets/svg/list-icon.svg?react';
import PaymentIcon from '@assets/svg/payment-icon.svg?react';
import SmallDollarIcon from '@assets/svg/small-dollar-icon.svg?react';

import { Position } from '@xyflow/react';

import RoundedStepEdge from './RoundedStepEdge';

import './style.scss';

const nodeTypes = { custom: CustomNode };
const edgeTypes = {
  rounded: RoundedStepEdge,
};

const initialNodes = [
  {
    id: '1',
    position: { x: -1000, y: 0 },
    draggable: false,
    type: 'custom',
    data: {
      title: 'Ai Voice Agent',
      icon: <AiVoiceIcon />,
      tag: <CustomTag text="Custom" bgColor="#E6F6F9" color="#03586D" border="1px solid #B2E2ED" />,
      list: [
        {
          icon: <PhoneIcon />,
          title: 'Inbound/Outbound Calls',
        },
        {
          icon: <CalendarIcon />,
          title: 'Appointment Setter',
        },
        {
          icon: <AvailabilityIcon />,
          title: '24/7 Availability',
        },
        {
          icon: <SmallPlusIcon />,
          title: '10 More Attributes',
        },
      ],
      grouPoints: (
        <>
          <div className="right-handles">
            <Handle type="source" position={Position.Right} id="el1-right" className="handle handle-left handle-1" />
          </div>
          <Handle type="source" position={Position.Bottom} className="single-point handle" id="el1-bottom" />
        </>
      ),
    },
  },
  {
    id: '2',
    position: { x: -790, y: 220 },
    draggable: false,
    type: 'custom',
    data: {
      title: 'Ai Voice Agent',
      icon: <AiChatBot />,
      tag: <CustomTag text="Custom" bgColor="#E6F6F9" color="#03586D" border="1px solid #B2E2ED" />,
      list: [
        {
          icon: <WorldIntegration />,
          title: 'Website Integration',
        },
        {
          icon: <WorldMultiLanguage />,
          title: 'Multi-language Support',
        },
        {
          icon: <LeadQuality />,
          title: 'Lead Qualification',
        },
      ],
      grouPoints: (
        <>
          <div className="left-handles">
            <Handle type="target" position={Position.Left} id="el2-left" className="multiple-points handle" />
          </div>
          <Handle type="source" position={Position.Right} className="single-point handle-right" id="el2-right" />
        </>
      ),
    },
  },
  {
    id: '3',
    position: { x: -520, y: 220 },
    draggable: false,
    type: 'custom',
    data: {
      title: 'Ai Voice Agent',
      icon: <AutomatedWorkflow />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <TaskAutomation />,
          title: 'Task Automation',
        },
        {
          icon: <DeadlineIcon />,
          title: 'Deadline Management',
        },
        {
          icon: <PuzzleIcon />,
          title: 'Integration Capabilities',
        },
      ],
      grouPoints: (
        <>
          <Handle type="target" id="el3-left" position={Position.Left} className="handle single-point" />
          <Handle type="source" id="el3-right" position={Position.Right} className="handle single-point" />
          <Handle type="target" id="el3-top" position={Position.Top} className="handle single-point" />
        </>
      ),
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: -240, y: 220 },
    draggable: false,
    data: {
      title: 'Ai Voice Agent',
      icon: <AutomatedCrm />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <ContactIcon />,
          title: 'Contact Management',
        },
        {
          icon: <PerfomanceIcon />,
          title: 'Performance Analytics',
        },
        {
          icon: <MobileIcon />,
          title: 'Mobile Access',
        },
      ],
      grouPoints: (
        <>
          <Handle type="target" id="el4-left" position={Position.Left} className="single-point handle" />
          <Handle type="target" id="el4-top" position={Position.Top} className="single-point handle" />
          <Handle type="target" id="el4-right" position={Position.Right} className="single-point handle" />
        </>
      ),
    },
  },
  {
    id: '5',
    position: { x: 0, y: 0 },
    draggable: false,
    type: 'custom',
    data: {
      title: 'Ai Voice Agent',
      icon: <InvoiceBilling />,
      tag: <CustomTag text="Standart" bgColor="#EFF0F1" color="#363B41" border="1px solid #CED1D5" />,
      list: [
        {
          icon: <ListIcon />,
          title: 'Automated Billing',
        },
        {
          icon: <PaymentIcon />,
          title: 'Payment Tracking',
        },
        {
          icon: <SmallDollarIcon />,
          title: 'Currency Options',
        },
      ],
      grouPoints: (
        <>
          <Handle type="source" id="el5-bottom" position={Position.Bottom} className="single-point handle" />
          <Handle type="source" id="el5-left" position={Position.Left} className="single-point handle" />
        </>
      ),
    },
  },
];

const initialEdges = [
  {
    id: 'e1-1',
    source: '1',
    sourceHandle: 'el1-bottom',
    target: '2',
    targetHandle: 'el2-left',
    type: 'smoothstep',
    animated: false,
  },
  {
    id: 'e1-2',
    source: '2',
    sourceHandle: 'el2-right',
    targetHandle: 'el3-left',
    target: '3',
    type: 'smoothstep',
    animated: false,
  },
  {
    id: 'e1-3',
    source: '1',
    sourceHandle: 'el1-right',
    target: '4',
    targetHandle: 'el4-top',
    type: 'rounded',
    animated: false,
  },
  {
    id: 'e1-4',
    source: '5',
    target: '4',
    sourceHandle: 'el5-bottom',
    targetHandle: 'el4-right',
    type: 'smoothstep',
    animated: false,
  },
  {
    id: 'e1-5',
    source: '3',
    target: '4',
    tagetHandle: 'el4-left',
    sourceHandle: 'el3-right',
    type: 'smoothstep',
    animated: false,
  },
  {
    id: 'e1-6',
    source: '5',
    target: '3',
    tagetHandle: 'el3-top',
    sourceHandle: 'el5-left',
    type: 'smoothstep',
    animated: false,
  },
];

export default function AIFlowChart() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div
      style={{ width: '100%', height: '400px', overflow: 'visible' }}
      onWheel={(e) => {
        window.scrollBy({
          top: e.deltaY,
        });
      }}
    >
      <ReactFlow
        nodes={nodes}
        edgeTypes={edgeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        zoomOnScroll={false}
        panOnDrag={false}
        panOnScroll={false}
        proOptions={{ hideAttribution: true }}
        zoomOnDoubleClick={false}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        style={{
          width: '100%',
          height: 'auto',
          minHeight: '400px',
          pointerEvents: 'auto',
          overscrollBehavior: 'contain',
          touchAction: 'auto',
        }}
        fitView
      ></ReactFlow>
    </div>
  );
}
