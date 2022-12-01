import { Button } from "@/views/shared/components/Button/Button";
import { IconButton } from "@/views/shared/components/Button/IconButton";
import { PlayIcon } from "@/views/shared/components/Icons/Icons";

export const ComponentsDemo_Button = () => (
  <>
    <div className="">
      <div className="">size - sm</div>
      <div className="flex gap-2 items-center">
        <Button text="Press" size="sm" />
        <Button text="Press" leftIcon={<PlayIcon />} size="sm" />
        <IconButton icon={<PlayIcon />} size="sm" />
      </div>
    </div>
    <div className="mt-2">
      <div className="">size - md</div>
      <div className="flex gap-2 items-center">
        <Button text="Press" size="md" />
        <Button text="Press" leftIcon={<PlayIcon />} size="md" />
        <IconButton icon={<PlayIcon />} size="md" />
      </div>
    </div>
    <div className="mt-2">
      <div className="">size - lg</div>
      <div className="flex gap-2 items-center">
        <Button text="Press" size="lg" />
        <Button text="Press" leftIcon={<PlayIcon />} size="lg" />
        <IconButton icon={<PlayIcon />} size="lg" />
      </div>
    </div>
    <div className="mt-2">
      <div className="">color</div>
      <div className="flex gap-2 items-center">
        <Button text="Press" color="gray" />
        <Button text="Press" leftIcon={<PlayIcon />} color="gray" />
        <IconButton icon={<PlayIcon />} color="gray" />
      </div>
      <div className="mt-2 flex gap-2 items-center">
        <Button text="primary" color="primary" />
        <Button text="primary" leftIcon={<PlayIcon />} color="primary" />
        <IconButton icon={<PlayIcon />} color="primary" />
      </div>
    </div>
  </>
);