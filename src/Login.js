import React from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import Cards from "./Cards";
import "./index.css"
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=9b09f413060c41a1939a4a983f09d3c2&response_type=code&redirect_uri=https://music-backend4.herokuapp.com/login&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
<Cards/>
  )
}
