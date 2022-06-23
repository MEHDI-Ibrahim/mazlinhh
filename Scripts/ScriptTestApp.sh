#!/bin/sh
../fabric-samples/test-network/network.sh up createChannel -c mychannel -ca
#../fabric-samples/test-network/network.sh deployCC -ccn events -ccp ../asset-transfer-events/chaincode-javascript/ -ccl javascript -ccep "OR('Org1MSP.peer','Org2MSP.peer')"
#java -jar /home/moussaab/Bureau/application-gateway-java.jar
#cd ../fabric-samples/asset-transfer-events/application-gateway-java
#./gradlew run
#/home/moussaab/fabric-samples/asset-transfer-events/application-gateway-java/gradlew run
