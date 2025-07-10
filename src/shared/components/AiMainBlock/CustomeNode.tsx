import './customNode.css';
import AiBlock from '@shared/components/AiBlock';

const CustomNode = ({ data }: any) => {
  return (
    <div className="custom-node">
      <div className="node-content">
        <AiBlock aiData={data} />
      </div>
      {data.grouPoints}
    </div>
  );
};

export default CustomNode;
