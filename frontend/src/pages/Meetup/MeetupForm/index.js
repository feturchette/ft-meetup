import React, { useState, useEffect, useRef } from "react";
import { parseISO, format } from "date-fns";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";
import { Container, Banner } from "./styles";
import selectImage from "~/assets/select-image.png";

export default function MeetupForm() {
  const selected = useSelector(state => state.meetup.selected);

  const [file, setFile] = useState("");
  const [url, setBanner] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "dd/MM/yyyy HH:mm"));
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setLocation(selected.location);
      setDescription(selected.description);
      setFile(selected.file_id);
      setDate(format(parseISO(selected.date), "dd/MM/yyyy HH:mm"));
      if (selected.File) {
        setPreview(selected.File.url);
      }
    }

    if (url) {
      setPreview(url);
    }
  }, [selected, url]);

  const schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    date: Yup.date().required("date is required"),
    file_id: Yup.number().required("Banner is required")
  });

  const fileInput = useRef();

  async function handleSubmit() {
    if (!date) {
      toast.error("Date is required");
      return;
    }

    console.log(date);
    const dateReg = /^([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/([2][01]|[1][6-9])\d{2}(\s([0-1]\d|[2][0-3])(\:[0-5]\d){1,2})?$/;
    if (!date.match(dateReg)) {
      toast.error("Date format should be dd/mm/yyyy hh:mm");
      return;
    }

    const [newDate, time] = date.split(" ");
    if (!time) {
      toast.error("Date format should be dd/mm/yyyy hh:mm");
      return;
    }

    const [day, month, year] = newDate.split("/");
    const [hour, minutes] = time.split(":");

    const finalDate = new Date(year, month-1, day, hour, minutes);
    console.log(finalDate);

    const data = {
      title,
      description,
      date: finalDate,
      location,
      file_id: file
    };

    try {
      await schema.validate(data);
    } catch (e) {
      toast.error(e.errors[0]);

      return;
    }

    if (!selected) {
      await api.post("meetups", data);
    } else {
      await api.put(`meetups/${selected.id}`, data);
    }

    history.push("/");
  }

  function handleImageClick() {
    fileInput.current.click();
  }

  async function handleImageChange(e) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await api.post("files", formData);

    setBanner(response.data.url);
    setFile(response.data.id);
  }

  return (
    <Container>
      <Banner onClick={handleImageClick} src={preview || selectImage} />
      <form schema={schema}>
        <input
          type="file"
          ref={fileInput}
          onChange={event => handleImageChange(event)}
          className="hidden"
        />
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          name="decription"
          placeholder="Description"
        />
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          name="date"
          placeholder="Date"
        />
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          name="location"
          placeholder="Location"
        />
        <button type="button" onClick={handleSubmit}>
          Save Meetup
        </button>
      </form>
    </Container>
  );
}
