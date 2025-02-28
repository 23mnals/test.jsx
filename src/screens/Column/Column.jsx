import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";

export const Column = () => {
  // Payment method options data
  const paymentMethods = [
    {
      id: "card",
      name: "Card",
      icon: "https://c.animaapp.com/ALS69mge/img/credit-card.svg",
      selected: true,
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: "https://c.animaapp.com/ALS69mge/img/paypal.svg",
      selected: false,
    },
    {
      id: "apple",
      name: "Apple",
      icon: "https://c.animaapp.com/ALS69mge/img/apple.svg",
      selected: false,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-6">
      {/* Create Account Card */}
      <Card className="w-full">
        <CardHeader className="gap-1.5">
          <CardTitle className="text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] font-h-3 font-[number:var(--h-3-font-weight)] [font-style:var(--h-3-font-style)]">
            Create Account
          </CardTitle>
          <CardDescription className="font-app-muted font-[number:var(--app-muted-font-weight)] text-[length:var(--app-muted-font-size)] tracking-[var(--app-muted-letter-spacing)] leading-[var(--app-muted-line-height)] [font-style:var(--app-muted-font-style)]">
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-4">
            {/* Social login buttons */}
            <div className="flex items-start gap-6">
              <Button
                variant="outline"
                className="flex-1 h-9 gap-2 justify-center"
              >
                <img
                  className="w-4 h-4"
                  alt="Github logo"
                  src="https://c.animaapp.com/ALS69mge/img/github-logo.svg"
                />
                <span className="font-medium text-sm">Github</span>
              </Button>

              <Button
                variant="outline"
                className="flex-1 h-9 gap-2 justify-center"
              >
                <img
                  className="w-4 h-4"
                  alt="Google"
                  src="https://c.animaapp.com/ALS69mge/img/google.svg"
                />
                <span className="font-medium text-sm">Google</span>
              </Button>
            </div>

            {/* Divider with text */}
            <div className="flex items-center">
              <Separator className="flex-grow" />
              <span className="px-2.5 text-xs text-zinc-500 font-normal">
                OR CONTINUE WITH
              </span>
              <Separator className="flex-grow" />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input id="email" defaultValue="m@example.com" className="h-9" />
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input id="password" type="password" className="h-9" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button className="w-full bg-[#17171b] text-[#f9f9f9] h-9">
            Create account
          </Button>
        </CardFooter>
      </Card>

      {/* Payment Method Card */}
      <Card className="w-full">
        <CardHeader className="gap-1.5">
          <CardTitle className="text-base tracking-[-0.40px] leading-4 font-semibold">
            Payment Method
          </CardTitle>
          <CardDescription className="font-app-muted font-[number:var(--app-muted-font-weight)] text-[length:var(--app-muted-font-size)] tracking-[var(--app-muted-letter-spacing)] leading-[var(--app-muted-line-height)] [font-style:var(--app-muted-font-style)]">
            Add a new payment method to your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-9">
          {/* Payment method options */}
          <div className="flex items-start gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex flex-col items-center gap-3 p-4 flex-1 rounded-md border-2 ${
                  method.selected ? "border-[#17171b]" : "border-zinc-100"
                }`}
              >
                <img className="w-4 h-4" alt={method.name} src={method.icon} />
                <span className="text-sm">{method.name}</span>
              </div>
            ))}
          </div>

          {/* Name field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input id="name" defaultValue="First Last" className="h-9" />
          </div>

          {/* Card number field */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="card-number" className="text-sm font-medium">
              Card number
            </Label>
            <Input id="card-number" className="h-9" />
          </div>

          {/* Expiry and CVC fields */}
          <div className="flex items-start gap-4">
            {/* Month select */}
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="expires" className="text-sm font-medium">
                Expires
              </Label>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  <SelectItem value="03">March</SelectItem>
                  <SelectItem value="04">April</SelectItem>
                  <SelectItem value="05">May</SelectItem>
                  <SelectItem value="06">June</SelectItem>
                  <SelectItem value="07">July</SelectItem>
                  <SelectItem value="08">August</SelectItem>
                  <SelectItem value="09">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Year select */}
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="year" className="text-sm font-medium">
                Year
              </Label>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* CVC field */}
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="cvc" className="text-sm font-medium">
                CVC
              </Label>
              <Input id="cvc" placeholder="CVC" className="h-9" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button className="w-full bg-[#17171b] text-[#f9f9f9] h-9">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
