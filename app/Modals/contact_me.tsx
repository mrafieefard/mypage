import {
  Button,
  Textarea,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface props {
  isOpen: boolean;
  onOpenChange(): void;
}

export default function ContactMeModal(props: props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Contact me
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
              />
              <Input
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <Textarea
                label="Message"
                placeholder="Enter your message"
                variant="bordered"
                minRows={10}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
