import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { getAllLinks } from "../utils/api";
import Modal from "../components/Modal";

const Links = ({ navigation }) => {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  const [chooseSlug, setChooseSlug] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { jwt, setJwt } = useContext(AuthContext);
  const handleNavigation = (path) => {
    navigation.navigate(path);
  };
  const fetchAllLinks = async () => {
    try {
      const data = await getAllLinks(jwt);
      console.log(data.data.data);
      setData(data.data.data);
      console.log("links successfully fetched!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((data) => {
    fetchAllLinks(data);
  }, []);

  const RenderTable = ({ item }) => {
    const slug = item.slug;
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text
          onPress={() => openDetails(slug)}
          style={{ padding: 2, width: 320, height: 50 }}
        >
          {item.link}
        </Text>
        {/* <View>
          <Button
            style={{ padding: 1, width: 100 }}
            onPress={() => openDetails(slug)}
          >
            More Details
          </Button>
        </View> */}
        {/* <View style={{ padding: 2, borderWidth: 1, width: 400 }}>
        <Text>{`${BASE_URL}/${item.slug}`}</Text>
      </View> */}
      </View>
    );
  };
  const openDetails = (slug) => {
    setChooseSlug(slug);
    handleModalOpen();
  };
  const closeDetails = () => {
    setChooseSlug("");
    handleModalClose();
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <SafeAreaView>
      {showModal === true && (
        <Modal slug={chooseSlug} close={() => closeDetails()}></Modal>
      )}
      {showModal == false && (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 20,
              color: "#EE6123",
            }}
          >
            List of Links
          </Text>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <RenderTable item={item} index={index} />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Links;
