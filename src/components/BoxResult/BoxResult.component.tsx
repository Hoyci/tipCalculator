import { Box, ContainerValues, ContentButton } from "./BoxResult.styles";
import { BoxResultTypes } from "./BoxResult.types";

function BoxResult({ tipAmount, total, resetValues, isDisabled }: BoxResultTypes) {
    
    return (
       <Box>
            <ContainerValues>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>

                <h1>${tipAmount || 0}</h1>
            </ContainerValues>

            <ContainerValues>
                <div>
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>

                <h1>${total || 0}</h1>
            </ContainerValues>

            <ContentButton onClick={resetValues} disabled={isDisabled}>RESET</ContentButton>
       </Box>
    )
}

export default BoxResult;