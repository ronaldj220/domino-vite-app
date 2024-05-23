import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  countDoubleNumber,
  flipDominos,
  generateRandomDominos,
  removeCardsWithTotal,
  removeDuplicates,
  sort,
} from "./utils";
import { useState } from "react";

function App() {
  const defaultDominos = generateRandomDominos(6);
  const [dominos, setDominos] = useState(defaultDominos);
  const [removeTotal, setRemoveTotal] = useState("");
  const [sourceDominos, setSourceDominos] = useState(defaultDominos);

  const doubleCount = countDoubleNumber(dominos);

  // Functional Button
  const resetData = () => {
    setDominos([...defaultDominos]);
    setSourceDominos([...defaultDominos]);
  };

  const sortAsc = () => setDominos(sort(dominos, "asc"));
  const sortDesc = () => setDominos(sort(dominos, "desc"));

  const handleFlip = () => setDominos(flipDominos(dominos));

  const handleRemoveDuplicates = () => {
    const uniqueDominos = removeDuplicates(dominos);
    setDominos(uniqueDominos);
  };

  const handleRemoveByTotal = () => {
    const total = parseInt(removeTotal, 10);
    if (!isNaN(total)) {
      const filteredDominos = removeCardsWithTotal(dominos, total);
      setDominos(filteredDominos);
    }
  };

  return (
    <Box p={5}>
      <Heading>Dominoes</Heading>

      <Card mt={5}>
        <CardBody>
          <Text fontWeight="bold">Source</Text>
          <Text mt={5}>
            [
            {sourceDominos.map(
              (tile, index) =>
                `[${tile[0]},${tile[1]}]${
                  index < sourceDominos.length - 1 ? ", " : ""
                }`
            )}
            ]
          </Text>
        </CardBody>
      </Card>

      <Card mt={5} width="fit-content">
        <CardBody>
          <Text fontWeight="bold">Double Numbers</Text>
          <Text mt={5}>{`${doubleCount}`}</Text>
        </CardBody>
      </Card>

      <Card width="fit-content" mt={5}>
        <CardBody>
          <Flex wrap="wrap" justify="left" mt={4}>
            {dominos.map((tile, index) => (
              <DominoTile key={index} values={tile} />
            ))}
          </Flex>
        </CardBody>
      </Card>

      <Flex gap={5} mt={5}>
        <Button colorScheme="blue" onClick={sortAsc}>
          Sort (ASC)
        </Button>
        <Button colorScheme="blue" onClick={sortDesc}>
          Sort (DESC)
        </Button>
        <Button colorScheme="blue" onClick={handleFlip}>
          Flip
        </Button>
        <Button colorScheme="blue" onClick={handleRemoveDuplicates}>
          Remove Dup
        </Button>
        <Button colorScheme="blue" onClick={resetData}>
          Reset
        </Button>
      </Flex>

      <Card mt={5} width="fit-content">
        <CardBody>
          <Input
            placeholder="Input number"
            value={removeTotal}
            onChange={(e) => setRemoveTotal(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleRemoveByTotal}>
            Remove
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;

const DominoTile = ({ values }) => {
  return (
    <Box
      className="domino-tile"
      m={2}
      border="1px solid black"
      borderRadius="md"
      overflow="hidden"
      minW="20px"
      textAlign="center"
      bg="white"
      p={2}
    >
      <Flex direction="column" align="center" justify="center" gap={5}>
        <Box>{values[0]}</Box>
        <Box w="100%" h="1px" bg="black" />
        <Box>{values[1]}</Box>
      </Flex>
    </Box>
  );
};
