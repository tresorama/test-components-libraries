import { ComponentsDemo_Button } from "./components/ComponentsDemo_Button";
import { ComponentsDemo_MovieHoveredCard } from "./components/ComponentsDemo_MovieHoveredCard";

export const ComponentsDemoView = () => {
  return (
    <>
      <div className="pb-20">
        <div className="px-4 py-8">
          <span className="text-4xl font-bold">Components Demo</span>
        </div>
        <div className="flex flex-col">
          <DemoSection
            title="Buttons"
            content={<ComponentsDemo_Button />}
          />
          <DemoSection
            title="Movie Hovered Card"
            content={<ComponentsDemo_MovieHoveredCard />}
          />
        </div>
      </div>
    </>
  );
};

const DemoSection = ({ title, content }: {
  title: string,
  content: React.ReactNode,
}) => (
  <div className="border-t">
    <div className="px-4 py-6">
      <span className="text-xl font-bold">{title}</span>
    </div>
    <div className="px-4 py-6">
      {content}
    </div>
  </div>
);
