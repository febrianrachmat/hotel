"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { differenceInDays, addDays, format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Users,
  Calendar,
} from "lucide-react";
import { BookingProgress } from "./booking-progress";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { rooms, getRoomById } from "@/data/rooms";
import { formatPrice } from "@/lib/format";
import type { BookingStep, GuestInfo } from "@/types";
import { cn } from "@/lib/utils";

const defaultCheckIn = addDays(new Date(), 14);
const defaultCheckOut = addDays(new Date(), 17);

const emptyGuest: GuestInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialRequests: "",
};

export function BookingFlow() {
  const [step, setStep] = useState<BookingStep>("room");
  const [roomId, setRoomId] = useState(rooms[0]?.id ?? "");
  const [guests, setGuests] = useState(2);
  const [checkIn] = useState(defaultCheckIn);
  const [checkOut] = useState(defaultCheckOut);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>(emptyGuest);

  const selectedRoom = getRoomById(roomId);
  const nights = Math.max(differenceInDays(checkOut, checkIn), 1);
  const subtotal = (selectedRoom?.pricePerNight ?? 0) * nights;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  const canProceedGuest =
    guestInfo.firstName.trim() &&
    guestInfo.lastName.trim() &&
    guestInfo.email.trim() &&
    guestInfo.phone.trim();

  const stepVariants = {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  };

  const goNext = () => {
    const order: BookingStep[] = ["room", "guest", "summary", "success"];
    const idx = order.indexOf(step);
    if (idx < order.length - 1) setStep(order[idx + 1]);
  };

  const goBack = () => {
    const order: BookingStep[] = ["room", "guest", "summary", "success"];
    const idx = order.indexOf(step);
    if (idx > 0) setStep(order[idx - 1]);
  };

  const confirmBooking = () => setStep("success");

  return (
    <div className="mx-auto w-full max-w-4xl">
      <BookingProgress currentStep={step} />

      <div className="mt-12">
        <AnimatePresence mode="wait">
          {step === "room" && (
            <motion.div
              key="room"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 text-center">
                <p className="editorial-spacing mb-2">Step 1</p>
                <h2 className="font-heading text-3xl text-foreground md:text-4xl">
                  Select Your Residence
                </h2>
                <p className="mt-3 text-sm text-text-muted">
                  {format(checkIn, "MMM d")} — {format(checkOut, "MMM d, yyyy")}{" "}
                  · {nights} nights · {guests} guests
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setRoomId(room.id)}
                    data-cursor-hover
                    className={cn(
                      "group relative overflow-hidden border text-left transition-all duration-300",
                      roomId === room.id
                        ? "border-champagne shadow-luxury"
                        : "border-white/10 hover:border-champagne/40"
                    )}
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        sizes="400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {roomId === room.id && (
                        <div className="absolute top-3 right-3 flex size-6 items-center justify-center bg-champagne">
                          <CheckCircle2 className="size-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg text-foreground">
                        {room.name}
                      </h3>
                      <p className="mt-1 text-sm text-champagne">
                        {formatPrice(room.pricePerNight)} / night
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <Label className="flex items-center gap-2 text-sm text-text-muted">
                  <Users className="size-4 text-champagne" />
                  Guests
                </Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setGuests(n)}
                      className={cn(
                        "size-9 border text-sm transition-colors",
                        guests === n
                          ? "border-champagne bg-champagne/10 text-champagne"
                          : "border-white/10 text-text-muted hover:border-champagne/40"
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === "guest" && (
            <motion.div
              key="guest"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-luxury-strong mx-auto max-w-lg p-8"
            >
              <div className="mb-8 text-center">
                <p className="editorial-spacing mb-2">Step 2</p>
                <h2 className="font-heading text-3xl text-foreground">
                  Guest Information
                </h2>
              </div>

              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (canProceedGuest) goNext();
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={guestInfo.firstName}
                      onChange={(e) =>
                        setGuestInfo({ ...guestInfo, firstName: e.target.value })
                      }
                      className="rounded-none border-white/10 bg-white/5"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={guestInfo.lastName}
                      onChange={(e) =>
                        setGuestInfo({ ...guestInfo, lastName: e.target.value })
                      }
                      className="rounded-none border-white/10 bg-white/5"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) =>
                      setGuestInfo({ ...guestInfo, email: e.target.value })
                    }
                    className="rounded-none border-white/10 bg-white/5"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) =>
                      setGuestInfo({ ...guestInfo, phone: e.target.value })
                    }
                    className="rounded-none border-white/10 bg-white/5"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (optional)</Label>
                  <Input
                    id="requests"
                    value={guestInfo.specialRequests ?? ""}
                    onChange={(e) =>
                      setGuestInfo({
                        ...guestInfo,
                        specialRequests: e.target.value,
                      })
                    }
                    className="rounded-none border-white/10 bg-white/5"
                    placeholder="Dietary needs, celebrations, preferences..."
                  />
                </div>
              </form>
            </motion.div>
          )}

          {step === "summary" && selectedRoom && (
            <motion.div
              key="summary"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-luxury-strong p-8"
            >
              <div className="mb-8 text-center">
                <p className="editorial-spacing mb-2">Step 3</p>
                <h2 className="font-heading text-3xl text-foreground">
                  Booking Summary
                </h2>
              </div>

              <div className="flex gap-6 border-b border-white/10 pb-6">
                <div className="relative hidden size-28 shrink-0 overflow-hidden sm:block">
                  <Image
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-foreground">
                    {selectedRoom.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-text-muted">
                    <Calendar className="size-4 text-champagne" />
                    {format(checkIn, "MMM d")} — {format(checkOut, "MMM d, yyyy")}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {nights} nights · {guests} guests
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {guestInfo.firstName} {guestInfo.lastName} · {guestInfo.email}
                  </p>
                </div>
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-text-muted">
                  <dt>
                    {formatPrice(selectedRoom.pricePerNight)} × {nights} nights
                  </dt>
                  <dd className="text-foreground">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-text-muted">
                  <dt>Service & resort fee (12%)</dt>
                  <dd className="text-foreground">{formatPrice(serviceFee)}</dd>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3 font-heading text-xl text-champagne">
                  <dt>Total</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>

              <p className="mt-6 text-xs text-text-muted">
                No payment required. This is a portfolio demonstration — your
                reservation will be simulated upon confirmation.
              </p>
            </motion.div>
          )}

          {step === "success" && selectedRoom && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-8 flex size-20 items-center justify-center border border-champagne bg-champagne/10"
              >
                <CheckCircle2 className="size-10 text-champagne" />
              </motion.div>
              <p className="editorial-spacing mb-4">Reservation Confirmed</p>
              <h2 className="font-heading text-4xl text-foreground md:text-5xl">
                Welcome to VELMONT
              </h2>
              <p className="mx-auto mt-4 max-w-md text-text-muted">
                Thank you, {guestInfo.firstName}. Your stay at the{" "}
                <span className="text-foreground">{selectedRoom.name}</span> has
                been reserved. A confirmation has been sent to {guestInfo.email}.
              </p>
              <p className="mt-6 font-heading text-2xl text-champagne">
                {formatPrice(total)}
              </p>
              <p className="text-xs tracking-[0.15em] text-text-muted uppercase">
                Reference #VLM-{Date.now().toString().slice(-6)}
              </p>
              <Link
                href="/"
                className={cn(
                  buttonVariants(),
                  "mt-10 inline-flex rounded-none tracking-[0.15em] uppercase"
                )}
              >
                Return to Homepage
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step !== "success" && (
        <div className="mt-10 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            disabled={step === "room"}
            className="rounded-none border-white/20 tracking-[0.1em] uppercase"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button
            type="button"
            onClick={step === "summary" ? confirmBooking : goNext}
            disabled={step === "guest" && !canProceedGuest}
            className="rounded-none tracking-[0.1em] uppercase"
          >
            {step === "summary" ? "Confirm Booking" : "Continue"}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
