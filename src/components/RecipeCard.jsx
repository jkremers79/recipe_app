import { useStore } from "../store";
import {
  Tag,
  Card,
  CardBody,
  Heading,
  Image,
  Flex,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe }) => {
  const setSelectedRecipe = useStore((state) => state.setSelectedRecipe);

  return (
    <Card
      width="300px"
      height="550px"
      backgroundColor="hsl(0, 0%, 96%)"
      onClick={() => setSelectedRecipe(recipe)}
      cursor={"pointer"}
      transitionDuration={"200ms"}
      _hover={{ transform: "scale(1.01)" }}
    >
      <Image
        src={recipe.recipe.image}
        width="300px"
        height="200px"
        objectFit="cover"
        borderTopRadius={"5px"}
      />
      <CardBody color={"hsl(220, 9%, 15%)"}>
        <Flex direction={"column"} alignItems={"center"} gap={"1rem"}>
          <Text fontWeight={"300"}>{recipe.recipe.mealType}</Text>

          <Heading size={"md"}>{recipe.recipe.label}</Heading>

          {recipe.recipe.dietLabels.length > 0 && (
            <Box>
              {recipe.recipe.dietLabels.map((diet) => (
                <Tag
                  colorScheme={"linkedin"}
                  key={diet}
                  marginLeft={"0.5rem"}
                  marginBottom={"0.5rem"}
                  fontWeight={"300"}
                >
                  {diet}
                </Tag>
              ))}
            </Box>
          )}

          <Box>
            {recipe.recipe.healthLabels.includes("Vegetarian") && (
              <Tag
                colorScheme={"green"}
                fontWeight={"300"}
                marginLeft={"0.5rem"}
              >
                Vegetarian
              </Tag>
            )}

            {recipe.recipe.healthLabels.includes("Vegan") && (
              <Tag
                colorScheme={"green"}
                marginLeft={"0.5rem"}
                fontWeight={"300"}
              >
                Vegan
              </Tag>
            )}
          </Box>

          <Text fontSize={"s"} fontWeight={"300"}>
            Dish: {recipe.recipe.dishType}
          </Text>

          {recipe.recipe.cautions.length > 0 && (
            <Box>
              <Center>
                <Text
                  fontSize={"0.75rem"}
                  fontWeight={"300"}
                  marginBottom={"0.5rem"}
                >
                  Cautions:
                </Text>
              </Center>

              {recipe.recipe.cautions.map((caution) => (
                <Tag
                  colorScheme={"red"}
                  key={caution}
                  marginLeft={"0.5rem"}
                  fontWeight={"300"}
                  marginBottom={"0.5rem"}
                >
                  {caution}
                </Tag>
              ))}
            </Box>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
};
